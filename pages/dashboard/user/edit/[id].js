import { useSession, signIn, signOut } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps(req) {
  const { id } = req.query;
  const res = await fetch('https://frontend-one-phi-55.vercel.app/api/users/' + id, {
    method: 'GET',
  })
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter()
  
//----------------------start handleSubmit--------------------------
  const handleUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      id: data.get('txt_studentid'),
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }
    console.log("studentid :", jsonData.studentid);
    console.log("firstname:", jsonData.firstname);
    console.log("lastname :", jsonData.lastname);
    console.log("username :", jsonData.username);
    console.log("password :", jsonData.password);
    console.log("status:", jsonData.studentid);

    fetch(`https://frontend-one-phi-55.vercel.app/api/users/`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }; //end handleSubmit


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
            
    <form onSubmit={handleUpdate}>
    {posts.users.map((post, i) => (
      <>
        <div className="container my-4"> 
            <nav class="navbar bg-body-tertiary">
              <a class="navbar-brand" >Edit</a>
            </nav>
            <div className="input-group mb-3">
            <input  type="hitden" 
                    name="txt_studentid" 
                    id="txt_studentid" 
                    className="form-control" 
                    placeholder="StudentID" 
                    defaultValue={post.id} 
                    required
            />
            </div>
            <div className="input-group mb-3">
            <input  type="text" 
                    name="txt_firstname" 
                    id="txt_firstname" 
                    className="form-control" 
                    placeholder="Firstname" 
                    defaultValue={post.firstname} 
                    required
            />
            </div>
            <div className="input-group mb-3">
            <input  type="text" 
                    name="txt_lastname" 
                    id="txt_lastname" 
                    className="form-control" 
                    placeholder="Lastname"
                    defaultValue={post.lastname} 
                    required
            />
            </div>
            <div className="input-group mb-3">
            <input  type="text" 
                    name="txt_username" 
                    id="txt_username" 
                    className="form-control" 
                    placeholder="Username" 
                    defaultValue={post.username} 
                    required
            />
            </div>
            <div className="input-group mb-3">
            <input  type="text" 
                    name="txt_password" 
                    id="txt_password" 
                    className="form-control" 
                    placeholder="Password" 
                    defaultValue={post.password} 
                    required
            />
            </div>
            <div className="input-group mb-3">
            <input  type="text" 
                    name="txt_status" 
                    id="txt_status" 
                    className="form-control" 
                    placeholder="Status" 
                    defaultValue={post.status} 
                    required
            />
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-success ">Save</button>
                <Link  className="btn btn-warning" href="/dashboard">Back</Link>
            </div>
            
        </div>
        </>
      ))}
    </form>
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

