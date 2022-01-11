import matter from 'gray-matter'

export async function getAllBlogs(){
    const blogs = ((context) => {
        const keys = context.keys()
        const values =keys.map(context)
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            const value = values[index]
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                slug:slug
            }
        })
        return data
    })(require.contet('../data', true, /\.md$/))

    const orderedBlogs = blogs.sort((a,b) => {
        return b.frontmatter.id - a.frontmatter.id
    })

    return {
        orderedBlogs: JSON.parse(JSON.stringify(orderedBlogs))
    }
}

export async function getSingleBlog(context) {
    const { slug } = context.params
    
}