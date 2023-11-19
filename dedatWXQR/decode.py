
def imageDecode(fileName, outFileName):
    dat_read = open(fileName, "rb")  						# 读取.dat 文件
    xo = Format(fileName)  								# 判断图片格式 并计算返回异或值
    png_write = open(outFileName, "wb")  					# 图片写入
    dat_read.seek(0)  								# 重置文件指针位置
    for now in dat_read:  							# 循环字节
        for nowByte in now:
            newByte = nowByte ^ xo  				# 转码计算
            png_write.write(bytes([newByte]))  		# 转码后重新写入
    dat_read.close()
    png_write.close()


def Format(f):
    dat_r = open(f, "rb")
    try:
        a = [(0x89, 0x50, 0x4e), (0x47, 0x49, 0x46), (0xff, 0xd8, 0xff)]
        for now in dat_r:
            for xor in a:
                i = 0
                res = []
                nowg = now[:3]  # 取前三个 数据信息
                for nowByte in nowg:
                    res.append(nowByte ^ xor[i])  # 进行判断
                    i += 1
                if res[0] == res[1] == res[2]:  # 三次异或值想等 说明就是那种格式
                    return res[0]  # 返回异或值
    except:
        pass
    finally:
        dat_r.close()


if __name__ == '__main__':
    # 解码
    imageDecode("./3bfd610f27cec58bd08f067a522dbec9.dat", "a.jpg")
