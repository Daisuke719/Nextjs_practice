import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    
  }

  // インポートのためにこの文を追加する
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      ...
      {/* {postData.date} を以下で置き換える */}
      <Date dateString={postData.date} />
      ...
    </Layout>
  )
}