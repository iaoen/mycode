import os
import sys

# 检测 在本地运行还是服务器
if getattr(sys, 'frozen', False):
    BASE_DIR = os.path.dirname(sys.executable)
    proxy = None
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    proxy = {
        "http": "127.0.0.1:7890",
        "https": "127.0.0.1:7890"
    }
print(f"----环境路径({BASE_DIR})----")
