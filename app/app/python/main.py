import subprocess
import json

def get_img_file_list():
    img_file_list = []
    cmd = ("./scraper")  # go langを実行
    res = res_cmd_no_lfeed(cmd)
    for el in res:
        if(el[:2] == "b'"):
            el = el[2:]
        if(el[-3:] == "\\n'"):
            el = el[:-3]
        img_file_list.append(el)
    return img_file_list

def res_cmd_lfeed(cmd):
    return subprocess.Popen(
        cmd, stdout=subprocess.PIPE,
        shell=True).stdout.readlines()

def res_cmd_no_lfeed(cmd):  # 改行コード無しのコマンド実行結果リストを取得
    return [str(x).rstrip("\n") for x in subprocess.Popen(
        cmd, stdout=subprocess.PIPE,
        shell=True).stdout.readlines()]

def main():
    img_file_list = get_img_file_list()
    print(json.JSONEncoder().encode(img_file_list))

if __name__ == '__main__':
    main()