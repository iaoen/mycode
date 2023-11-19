import httpx

# 定义2个url
url1 = 'https://api.twitter.com/1.1/guest/activate.json'
url2 = 'https://api.twitter.com/1.1/onboarding/task.json'


def login(email, username, password, ip=None, islog=False):
    # 是否使用代理
    if ip is None:
        proxy = None
    else:
        proxy = {"http://": "http://"+ip, "https://": "http://"+ip}

    # 使用http2协议
    http = httpx.Client(http2=True, follow_redirects=True, proxies=proxy)

    # 定义cookies，headers
    cookies = {
        "email": email,
        "username": username,
        "password": password,
        "guest_token": None,
        "flow_token": None,
    }
    headers = {
        'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        'x-twitter-active-user': 'yes',
        'x-twitter-client-language': 'en',
    }

    # 获取guest_token
    res = http.post(url1, headers=headers, cookies=cookies).json()  # 携带headers和cookies访问接口
    if "guest_token" not in res:  # 看看返回的json有没有‘guest_token’字段，没有就报错
        raise Exception('获取guest_token failed:', res)
    if islog:  # 是否打印日志，默认不打印
        print("获取guest_token", res)  # {'guest_token': '1700032463257608507'}
    cookies["guest_token"] = res["guest_token"]  # 设置cookies对象中的guest_token值

    # 第一步验证
    headers['x-guest-token'] = cookies["guest_token"]  # 设置headers对象中的x-guest-token值
    data = {"input_flow_data": {"flow_context": {"debug_overrides": {}, "start_location": {"location": "splash_screen"}}}, "subtask_versions": {}}  # 提交的数据，使用post Json格式
    res = http.post(url2+"?flow_name=login", json=data, headers=headers, cookies=cookies).json()  # 携带headers和cookies访问接口
    if "flow_token" not in res:  # 看看返回的json有没有‘flow_token’字段，没有就报错
        raise Exception('第一步验证 failed:', res)
    if islog:
        print("第一步验证", res)  # {'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:0', 'status': 'success', 'subtasks': [{'subtask_id': 'LoginJsInstrumentationSubtask', 'js_instrumentation': {'url': 'https://twitter.com/i/js_inst?c_name=ui_metrics', 'timeout_ms': 2000, 'next_link': {'link_type': 'task', 'link_id': 'next_link'}}}]}
    cookies["flow_token"] = res["flow_token"]  # 设置cookies对象中的flow_token值。因 flow_token 需要拿到下一个请求继续验证

    # 第二步验证
    data = {
        "flow_token": cookies["flow_token"],
        "subtask_inputs": [{
            "subtask_id": "LoginJsInstrumentationSubtask",
            "js_instrumentation": {"response": "{}", "link": "next_link"}
        }],
    }  # 提交的数据，使用post Json格式
    res = http.post(url2, json=data, headers=headers, cookies=cookies).json()  # 携带headers和cookies访问接口
    if "flow_token" not in res:  # 看看返回的json有没有‘flow_token’字段，没有就报错
        raise Exception('第二步验证 failed:', res)
    if islog:
        print("第二步验证", res)  # {'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:1', 'status': 'success', 'subtasks': [{'subtask_id': 'LoginEnterUserIdentifierSSO', 'settings_list': {'settings': [{'value_type': 'button', 'value_identifier': 'google_sso_button', 'value_data': {'button': {'navigation_link': {'link_type': 'subtask', 'link_id': 'google_sso', 'label': 'Continue with Google', 'subtask_id': 'EnterIdGoogleSSOSubtask'}, 'style': 'brand', 'icon': {'icon': 'logo_google_g_color'}, 'preferred_size': 'normal'}}}, {'value_type': 'button', 'value_identifier': 'apple_sso_button', 'value_data': {'button': {'navigation_link': {'link_type': 'subtask', 'link_id': 'apple_id', 'label': 'Continue with Apple', 'subtask_id': 'EnterIdAppleSSOSubtask'}, 'style': 'brand', 'icon': {'icon': 'logo_apple'}, 'preferred_size': 'normal'}}}, {'value_type': 'separator', 'value_identifier': 'separator', 'value_data': {'separator': {'label': {'text': 'or', 'entities': []}}}}, {'value_type': 'text_field', 'value_identifier': 'user_identifier', 'value_data': {'text_field': {'content_type': 'text', 'hint_text': 'Phone, email, or username'}}}, {'value_type': 'button', 'value_identifier': 'next_button', 'value_data': {'button': {'navigation_link': {'link_type': 'task', 'link_id': 'next_link', 'label': 'Next'}, 'style': 'primary', 'preferred_size': 'normal'}}}, {'value_type': 'button', 'value_identifier': 'forgot_password', 'value_data': {'button': {'navigation_link': {'link_type': 'subtask', 'link_id': 'forget_password', 'label': 'Forgot password?', 'subtask_id': 'RedirectToPasswordReset'}, 'style': 'secondary', 'preferred_size': 'normal'}}}], 'detail_text': {'text': "Don't have an account? Sign up", 'entities': [{'from_index': 23, 'to_index': 30, 'navigation_link': {'link_type': 'deep_link_and_abort', 'link_id': 'signup_deep_link', 'url': 'https://twitter.com/i/flow/signup'}}]}, 'style': 'step', 'header': {'primary_text': {'text': 'Sign in to X', 'entities': []}}, 'navigation_style': 'hide', 'horizontal_style': 'compact'}, 'subtask_back_navigation': 'cancel_flow'}, {'subtask_id': 'EnterIdGoogleSSOSubtask', 'single_sign_on': {'provider': 'google', 'scopes': ['openid', 'email', 'profile'], 'state': 'DAtw8Zy1u8-QAlJs4EhgyOBBOQHqa2q64Grzu7b-xae', 'next_link': {'link_type': 'task', 'link_id': 'next_link'}, 'fail_link': {'link_type': 'subtask', 'link_id': 'fail_link', 'subtask_id': 'LoginEnterUserIdentifierSSO'}, 'cancel_link': {'link_type': 'subtask', 'link_id': 'cancel_link', 'subtask_id': 'LoginEnterUserIdentifierSSO'}}, 'subtask_back_navigation': 'cancel_flow'}, {'subtask_id': 'EnterIdAppleSSOSubtask', 'single_sign_on': {'provider': 'apple', 'scopes': ['email', 'name'], 'state': 'C_PUlvluoSxDwN2qZbAOQaWXhm5mpibSMAOjk74wBZ2', 'next_link': {'link_type': 'task', 'link_id': 'next_link'}, 'fail_link': {'link_type': 'subtask', 'link_id': 'fail_link', 'subtask_id': 'LoginEnterUserIdentifierSSO'}, 'cancel_link': {'link_type': 'subtask', 'link_id': 'cancel_link', 'subtask_id': 'LoginEnterUserIdentifierSSO'}}, 'subtask_back_navigation': 'cancel_flow'}, {'subtask_id': 'RedirectToPasswordReset', 'open_link': {'link': {'link_type': 'deep_link_and_abort', 'link_id': 'password_reset_deep_link', 'url': 'https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D'}}}]}
    cookies["flow_token"] = res["flow_token"]

    # 第三步验证
    data = {
        "flow_token": cookies["flow_token"],
        "subtask_inputs": [{
            "subtask_id": "LoginEnterUserIdentifierSSO",
            "settings_list": {
                "setting_responses": [{
                    "key": "user_identifier",
                    "response_data": {"text_data": {"result": username}}
                }],
                "link": "next_link"
            }
        }]
    }
    res = http.post(url2, json=data, headers=headers, cookies=cookies).json()
    if "flow_token" not in res:
        raise Exception('第三步验证 failed:', res)
    if islog:
        print("第三步验证", res)  # {'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:6', 'status': 'success', 'subtasks': [{'subtask_id': 'LoginEnterPassword', 'enter_password': {'primary_text': {'text': 'Enter your password', 'entities': []}, 'next_link': {'link_type': 'task', 'link_id': 'next_link', 'label': 'Log in'}, 'hint': 'Password', 'username': 'eucheriangozi', 'user_identifier_display_type': 'username', 'skip_password_validation': True, 'os_content_type': 'password', 'footer': {'style': 'fixed', 'footnote_text': {'text': "Don't have an account? Sign up", 'entities': [{'from_index': 23, 'to_index': 30, 'navigation_link': {'link_type': 'deep_link_and_abort', 'link_id': 'signup_deep_link', 'url': 'https://twitter.com/i/flow/signup'}}]}}, 'password_field': {'content_type': 'password', 'hint_text': 'Password', 'detail_text': {'text': 'Forgot password?\t', 'entities': [{'from_index': 0, 'to_index': 16, 'navigation_link': {'link_type': 'subtask', 'link_id': 'forget_password', 'label': 'Forgot password?', 'subtask_id': 'RedirectToPasswordReset'}}]}}}, 'subtask_back_navigation': 'cancel_flow'}, {'subtask_id': 'RedirectToPasswordReset', 'open_link': {'link': {'link_type': 'deep_link_and_abort', 'link_id': 'password_reset_deep_link', 'url': 'https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJ1c2VyX2lkZW50aWZpZXIiOiJldWNoZXJpYW5nb3ppIiwicGxhdGZvcm0iOiJSd2ViIn0%3D%22%7D'}}}]}
    cookies["flow_token"] = res["flow_token"]

    # 第四步验证
    data = {
        "flow_token": cookies["flow_token"],
        "subtask_inputs": [{
            "subtask_id": "LoginEnterPassword",
            "enter_password": {"password": password, "link": "next_link"}
        }]
    }
    res = http.post(url2, json=data, headers=headers, cookies=cookies).json()
    if "flow_token" not in res:
        raise Exception('第四步验证 failed:', res)
    if islog:
        print("第四步验证", res)  # {'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:7', 'status': 'success', 'subtasks': [{'subtask_id': 'AccountDuplicationCheck', 'check_logged_in_account': {'true_link': {'link_type': 'task', 'link_id': 'AccountDuplicationCheck_true'}, 'false_link': {'link_type': 'task', 'link_id': 'AccountDuplicationCheck_false'}, 'user_id': '2583142474'}}]}
    cookies["flow_token"] = res["flow_token"]

    # 第五步完成验证
    data = {
        "flow_token": cookies["flow_token"],
        "subtask_inputs": [{
            "subtask_id": "AccountDuplicationCheck",
            "check_logged_in_account": {"link": "AccountDuplicationCheck_false"},
        }],
    }
    res = http.post(url2, json=data, headers=headers, cookies=cookies)
    res_json = res.json()
    if "flow_token" not in res_json:
        raise Exception('第五步验证 failed:', res_json)
    if islog:
        print("第五步完成验证", res_json)  # {'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:13', 'status': 'success', 'subtasks': [{'subtask_id': 'LoginSuccessSubtask', 'open_account': {'user': {'id': 2583142474, 'id_str': '2583142474', 'name': 'Eucheria ngozi', 'screen_name': 'Eucheriangozi'}, 'next_link': {'link_type': 'subtask', 'link_id': 'next_link', 'subtask_id': 'SuccessExit'}, 'attribution_event': 'login'}}, {'subtask_id': 'SuccessExit', 'open_link': {'link': {'link_type': 'subtask', 'link_id': 'next_link', 'subtask_id': 'LoginOpenHomeTimeline'}}}, {'subtask_id': 'LoginOpenHomeTimeline', 'open_home_timeline': {'next_link': {'link_type': 'abort', 'link_id': 'next_link'}}}]}
    cookies["flow_token"] = res_json["flow_token"]

    # 获取cookies。遍历第五步接口返回的cookies添加到一开始自定义的cookies中，可以理解为合并了
    for k, v in res.cookies.items():
        cookies[k] = v

    if islog:
        print("cookie_json:", cookies)
    http.close()  # 关闭http2协议
    # 返回cookies 如{'email': 'Eucheriangozi@yahoo.com', 'username': 'Eucheriangozi', 'password': 'snRRjQpxht0hHEi', 'guest_token': '1700078334443651266', 'flow_token': 'g;169415429896918841:-1694154299440:fzh8Z9RNNrg8l7KmGPahPfAI:13', 'auth_token': '9f1286801b6996971aaff5bb3d6d1f0600b93271', 'ct0': '9ac77271d930dff6afe63b3f2cd0a4a4', 'kdt': '8mf3b4MnBlWh8SZCII4ukMkLg71AcN9y3O9ij3No', 'twid': '"u=2583142474"'}
    # 其中email，username，password是用户传入的数据
    # guest_token是“获取guest_token”得到的
    # flow_token 第一到第五步都会生成，一直套娃用到下一步中作为参数，最后是取的第五步的结果
    # auth_token，ct0，kdt，twid是第五步返回的headers取的，有了这四个参数才算登陆成功了
    return cookies


print(login("邮箱", "用户名", "密码"))
