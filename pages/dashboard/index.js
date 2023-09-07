import { useSession, signIn, signOut } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users/')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleDelete = async (id) => {
    // console.log("ID :",id);
    fetch('http://localhost:3000/api/users?id=' + id, {
      method: 'DELETE',
    })
    return router.reload('/dasbord')
  }

  
  if (session) {
    return (
      <>

            <nav class="navbar bg-warning" >
              <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">Member</a>
                Signed in as {session.user.username} <br /> */}
              <div class="example-content-secondary">
                {session.user.username}   <br />
              </div>
                <button class="btn btn-danger"   onClick={() => signOut()}>Sign out</button>
              </div>
            </nav>
            

          <div className="container my-4">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <button className="btn btn-success ">Add Member</button> */}
              <Link   Link className="btn btn-success" href="dashboard/user/add">Add Member</Link>
            </div>
            
            <div className="table-responsive mt-4">
            <nav class="navbar bg-body-tertiary">
              <a class="navbar-brand" >Member List</a>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th><center>No</center></th>
                    <th><center>Student ID</center></th>
                    <th><center>FirstName</center></th>
                    <th><center>LastName</center></th>
                    <th><center>Username</center></th>
                    <th><center>Password</center></th>
                    <th><center>Status</center></th>
                    <th><center>Edit/Delete</center></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post, i) => (
                    <tr key={post.id}>
                      <td><center>{i+1}</center></td>
                      <td><center>{post.studentid}</center></td>
                      <td><center>{post.firstname}</center></td>
                      <td><center>{post.lastname}</center></td>
                      <td><center>{post.username}</center></td>
                      <td><center>{post.password}</center></td>
                      <td><center>{post.status}</center></td>
                      
                      <div>
                        <center>
                        <Link href={`/dashboard/user/edit/${post.id}`} className="btn btn-warning">
                          <i className="bi bi-pencil-square"></i>
                        </Link>{" "}&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(post.id)}> 
                          <i className="bi bi-trash3"></i>
                        </button>{" "}
                        </center>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
              </nav>
            </div>
          </div>
      </>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </div>
    </>
  )
}
