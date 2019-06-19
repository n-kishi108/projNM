import subprocess

def main():
    response = read_test_data()  # Golangでスクレイピングした画像ファイルのパスをリストとして取得する
    print(response)

def read_test_data():  # Golangでスクレイピングした画像ファイルのパスをリストとして取得する
    # 読込むファイルのパスを宣言する
    file_name = "./img_list.txt"
    response = []

    try:
        file = open(file_name)
        lines = file.readlines()
        for line in lines:  # 1行ずつ読み込む
            response.append('test_data/' + line.rstrip("\n"))
    except Exception as e:
        print(e)
    finally:
        file.close()

    return response
# import json

# def get_img_file_list():
#     img_file_list = []
#     cmd = ("./scraper")  # go langを実行
#     res = res_cmd_no_lfeed(cmd)
#     for el in res:
#         if(el[:2] == "b'"):
#             el = el[2:]
#         if(el[-3:] == "\\n'"):
#             el = el[:-3]
#         img_file_list.append(el)
#     return img_file_list

# def res_cmd_lfeed(cmd):
#     return subprocess.Popen(
#         cmd, stdout=subprocess.PIPE,
#         shell=True).stdout.readlines()

# def res_cmd_no_lfeed(cmd):  # 改行コード無しのコマンド実行結果リストを取得
#     return [str(x).rstrip("\n") for x in subprocess.Popen(
#         cmd, stdout=subprocess.PIPE,
#         shell=True).stdout.readlines()]

# def main():
#     img_file_list = get_img_file_list()
#     print(json.JSONEncoder().encode(img_file_list))

if __name__ == '__main__':
    main()