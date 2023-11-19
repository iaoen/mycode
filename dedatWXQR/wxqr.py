import cv2


class wxqr:
    def __init__(self):
        DIRNAME = "./"
        self.detect_obj = cv2.wechat_qrcode_WeChatQRCode(DIRNAME+"datDecodeWXQR/detect.prototxt", DIRNAME+"datDecodeWXQR/detect.caffemodel", DIRNAME+"datDecodeWXQR/sr.prototxt", DIRNAME+"datDecodeWXQR/sr.caffemodel")

    def decode(self, fileName):
        img = cv2.imread(fileName)
        res, points = self.detect_obj.detectAndDecode(img)
        return res, points


# 调用wx二维码识别模型识别
qr = wxqr()
res, _ = qr.decode("a.jpg")
if res != ():
    print(res[0])
