package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	path := "../python/test_data"
	dir, err := ioutil.ReadDir(path)
	if err != nil {
		panic(err)
	}

	//ディレクトリ下のファイルを1つずつ取得
	var img_list []string
	for _, child := range dir {
		file, _ := ioutil.ReadFile(filepath.Join(path, child.Name()))
		stringReader := strings.NewReader(string(file))
		doc, err := goquery.NewDocumentFromReader(stringReader)
		if err != nil {
			panic(err)
		}
		if child.IsDir() || child.Name()[0:1] == "." {
			continue
		}
		//imgタグのsrc属性が存在していれば、画像パスを配列に追加する
		doc.Find("img").Each(func(_ int, selection *goquery.Selection) {
			attr, exists := selection.Attr("src")
			if exists {
				img_list = append(img_list, attr)
			}
		})
	}

	//出力
	for _, data := range img_list {
		fmt.Println(data)
	}
}
