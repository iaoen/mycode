from Crypto.Cipher import DES
import base64


class DESCrypter():
    def __init__(self, key, iv=None):
        self.key = key
        if iv:
            self.iv = iv
        else:
            self.iv = key
        self.mode = DES.MODE_CBC
        self.BS = len(key)
        self.pad = lambda s: s + (self.BS - len(s) % self.BS) * chr(self.BS - len(s) % self.BS).encode()
        self.unpad = lambda s: s[0:-s[-1]]
        self.generator_en = DES.new(self.key, self.mode, self.iv)
        self.generator_de = DES.new(self.key, self.mode, self.iv)

    def encrypt(self, en_data: str):
        a = self.pad(en_data.encode())
        b = self.generator_en.encrypt(a)
        c = base64.b64encode(b).decode()
        return c

    def decrypt(self, de_data):
        a = base64.b64decode(de_data)
        b = self.generator_de.decrypt(a)
        return self.unpad(b).decode()


if __name__ == '__main__':
    des = DESCrypter(b'48CDABEE', b'0672DEAA')

    de_data = des.decrypt("klAt3PN+0fSAuAejde6To4CgGl4/YWfab+qiBZbEgu0xQQm/i28UGnoLMmNB3WOxNVenP+DbHCJr7bQrKRynwjeB6+2R7dMv+aeoMU+4OHHnA9HsANHjdeh+uDWDgcBAC8BbPsm0XYj0F/8xYvJAQO0NHzSWRvRo4EGHgWKJvmA5jHfqqNeTu7ya3kFlTjV1GyYKlvMLqPHlLiEU/4PZc84I5hErPjkM2TileNdX+0rfCcscdsssgL6aSLft15DGgOVLXaNkK0VpNENGLP5xdGzQbeohe8fXM78xLs/HJT7VkvFe1Jn5IQMNE9UwZFZQiN0Z5VlHk5lLc5lxtP90jJMejVKJbgxO0CHNk9SflG30gRaS0kp0BvyplKQrAnu9glFutRRLrzi22N/rWzRh3G3y4kD/2dfReQFx2Bmap7dtM+JYMl4lV1l61LmPtTybD7T4/r3h+nDd88DWQq6MT8tgB5QRXntFNrd4xGeBnzY/VAwzyyyC7N5hXmYrGwSmVLVcbjCmAnFhSVh1/P0bQCmeyaEEKgeUYLEePNgHMp2HO/h13JXUl8cgm8gS9ESsc3xQwfAZa1Sdtq/9lFHcvtY3BtqSznQvvR++j61NHzFdtrqORNaAVv5JS3uScGSqLgl+oHnEyGwDcwkLwhEGrAfL05Ht5zgKDjCSJEDm81pXER6BgPPH1Jz+cI4TlfmS0jiHlwU33HTxG99yjb6sBvIDMSFzPZjmhfA6kpwxjDx1rAA53HySLZYqf072fSBc5iWLu09Ff9SNoh+ytMn6AnidefyD0H71CNLwHpYZ1Ywh0VOp4w/1A1ZxNIn4Fldfa2a8NayPvuawbP157aqfFfM74SHnjVZ4doqGG8iifXQmBpjN/ddgZjPsrSJJqeC1u5xN5SrDrTZ30PjJ3j47TiJiQo+Lu230RD8P9IsyT1OYx62mUXgrPxOkw1XUomzPXtqeGSkV+LPsp/1pJug9J7d4lBVirOceNtophzI/xM43Fqth0hPTVAi/Himdbd1r4ykRR873fZzh+t5uZ/MCIRXpTacF6E9nOPk2x7l/h99juRklK6+8jsqftWjna807WxUtozQQLZJYUbE4vQwO447HdIBvheO5fjugfF7ThjtUftK169uTZ7unBFtL0N3xZc3Nvm905J+ccoilnF5OVJoDn6Ll6f6lpZ7DdVC01hGTtwEeOYsyiX0MAC6D150NBDfN9SdbEUYiPIbG30rgad/pUhfAdBjDFo8yShIoWf0jiOgZUcT6rGkns0fZKGx6EotvmO9EyJn8eL6kPY3x86+oz6OgkAqE/YUK5bztXpl6OFtcva1XzpI9RmXAfzwgmKjXPiJXgWdkJf8FNHARJqAnLpEX8KG/tdK+JONyDlgaoBUtGW+lkaLwSQIkBgfbaFnWW+dAplWyMWaDzIkS7le3vnxg6QB1WakhgsgGiR3m10LdV3JXqdLMUJfoHhl6ownur+tehYYab/xi8pzTbjdJClrvG+iVt4QV+FAUpEGGFmbeW69eRJwTT5ha2OF06PYuODBJkDsW/MpGdx/Wih2WJHmIjLDO1/y4DGa5Y1px4FLraFiZxVnBNayGcJKlvFxbZ6YW8jGR+LXF1WRmINLL2yLBpl40mtWcjW6LMfQW9NIOTkP516UJtQUSFcZF0G+1+uSVNQVU03MThq7pFb08onOAngUxO7qqnxtO4rXbmNDz9PF2Hyh/Ufaf5n3GT/E08T0vLkM=")
    print(de_data)
