
import React from "react"
import { Outlet ,Link } from "react-router-dom"
function App(){
return(
<div>

<Link to="/Home"><button>HomePage</button></Link>|{" "}
<Link to="/login"><button>HomePage</button></Link>|{" "}
<Link to="/Branch"><button>Branch</button></Link>|{" "}
<Link to="/AddMeal"><button>AddMeal</button></Link>{" "}
<Link to="/AddRoom"><button>AddRoom</button></Link>{" "}
<Link to="/BranchName"><button>BranchName</button></Link>{" "}

<Outlet />
</div>
)
}
export default App