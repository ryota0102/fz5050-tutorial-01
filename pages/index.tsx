import Link from 'next/link'
import Layout from '../components/Layout'

const persons = [
  {id:1,name:"ryota"},
  {id:2,name:"hikari"},
  {id:3,name:"hinata"},
  {id:4,name:"who"}
];

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <Link href="/about">
        <a>About(next.js LinkAPI)</a>
      </Link>
    </div>

    <div>
      <a href="/about">About(a tag only)</a>
    </div>

    {
      persons.map(
        person => {
          return (
            <div key={person.id}>
              <Link as ={`/${person.name}`} href="/[person]">
                <a>{person.name}</a>
              </Link>
            </div>
          );
        }
      )
    }
  </Layout>
)

export default IndexPage
