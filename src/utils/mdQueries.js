import matter from 'gray-matter'

export const blogsPerPage = 5  //1ページあたりの記事数

export async function getAllBlogs() {
    const blogs = ((context) => {
        const keys = context.keys()  //それぞれのマークダウンファイル配列
        const values = keys.map(context)  //マークダウンファイルの中身の配列

        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)  //ファイル名からname部分のみを抽出
            const value = values[index]  //マークダウンファイルの中身
            const document = matter(value.default)  //マークダウンファイルの中身のfront matter部分を変換したもの
            return {
                frontmatter: document.data,  //マークダウン内のfront matter部分
                slug: slug
            }
        })
        return data
    })(require.context('../data', true, /\.md$/))  //contextの設定

    const orderedBlogs = blogs.sort((a, b) => {  //front matterのid順で並び替え
        return b.frontmatter.id - a.frontmatter.id
    })

    const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage)  //ページの総数

    return {
        orderedBlogs: JSON.parse(JSON.stringify(orderedBlogs)),  //並び替え後のブログデータ
        numberPages: numberPages  //ページの総数
    }
}

export async function getSingleBlog(context) {
    const { slug } = context.params  //該当ブログデータのslug
    const data = await import(`../data/${slug}.md`)  //slugから該当のマークダウンデータをimport
    const singleDocument = matter(data.default)  //front matter部分を変換

    return {
        singleDocument: singleDocument
    }
}
