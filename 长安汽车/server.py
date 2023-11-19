import base64
import random
import time
import hashlib
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5, AES
from flask import Flask, request

app = Flask(__name__)

key_map = [["a", "Q"], ["b", "U"], ["c", "P"], ["d", "A"], ["e", "L"], ["f", "Z"], ["g", "M"], ["h", "T"], ["i", "G"], ["j", "B"], ["k", "W"], ["l", "O"], ["m", "K"], ["n", "S"], ["o", "N"], ["p", "X"], ["q", "E"], ["r", "Y"], ["s", "J"], ["t", "I"], ["u", "D"], ["v", "C"], ["w", "R"], ["x", "F"], ["y", "H"], ["z", "V"], ["A", "s"], ["B", "k"], ["C", "d"], ["D", "a"], ["E", "f"], ["F", "g"], ["G", "j"], ["H", "h"], ["I", "l"], ["J", "q"], ["K", "z"], ["L", "x"], ["M", "w"], ["N", "m"], ["O", "p"], ["P", "e"], ["Q", "c"], ["R", "o"], ["S", "n"], ["T", "i"], ["U", "r"], ["V", "v"], ["W", "b"], ["X", "t"], ["Y", "y"], ["Z", "u"]]

key = """-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh6TftQYoCDVhRrjCRSvc
r2zGxZambFtnIJ8Ju1f466DI0YRMIxndXsTcVU/tt6C45fwKW+nwNWMvCucrWjzx
2iJU3S4N0QtNz9a7+TtkKHyTgE3sLtylrJuJKHHotMapi5o6t/D31G2OhsTx3QVu
H3piwVpvDptkWEeh8Fj814GzEt4ID5HSMW/kLKnIU0fL0+JF4/3jJBfEAcIgk22Y
jvltaooSnYxe+8LipD2KA8I5OyqJWH80scuBHMd2jj4kAcX27rdurPocp7LAn7kh
pNV0QJMxEm617Ka+Kyo7kJyget5HfpLeqWmsZX5ISYYBOXcvI2tlGnsWViq+kZBL
vQIDAQAB
-----END PUBLIC KEY-----"""


rsa_key = RSA.import_key(key)
cipher_rsa = PKCS1_v1_5.new(rsa_key)

BLOCK_SIZE = AES.block_size


def pad(s): return s + (BLOCK_SIZE - len(s.encode()) % BLOCK_SIZE) * chr(BLOCK_SIZE - len(s.encode()) % BLOCK_SIZE)


def encrypt_rsa(plaintext):
    en_data = cipher_rsa.encrypt(plaintext.encode("utf-8"))
    base64_text = base64.b64encode(en_data)
    return base64_text.decode()


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest()


def encrypt_aes(text, keys, iv):
    text = pad(text).encode("utf8")
    cipher = AES.new(keys.encode("utf8"), AES.MODE_CBC, iv)
    encrypted_text = cipher.encrypt(text)
    return base64.b64encode(encrypted_text).decode('utf8')


def rand_code(code_len=3):
    all_char = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJIKOLP'
    indexs = len(all_char) - 1
    code = ''
    for _ in range(code_len):
        num = random.randint(0, indexs)
        code += all_char[num]
    return code


def key_mapp(parm):
    result = ""
    for ii in parm:
        for i in key_map:
            if ii == i[0]:
                result += i[1]
    return result


def main(data):
    print(data)
    tt = str(int(time.time()*1000))
    randcode = rand_code()
    rand_key_aes = "{}{}".format(int(tt)-2, randcode)
    rand_key_rsa = "{}{}".format(int(tt)-2, key_mapp(randcode))

    paramEncr = encrypt_aes(data, rand_key_aes, bytes(rand_key_aes, encoding="utf8"))
    sign = md5('{}{}hyzh-unistar-5KWJKH291IvadR'.format('{"paramEncr":"' + paramEncr+'"}', tt)).upper()
    seccode = encrypt_rsa(rand_key_rsa)
    return tt, sign, paramEncr, seccode


@app.post('/uni')
def uni():
    data = request.get_json()
    print(data["data"])

    tt, sign, paramEncr, seccode = main(data["data"])

    res = {"tt": tt, "sign": sign, "paramEncr": paramEncr, "seccode": seccode}
    return res


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=9999)
