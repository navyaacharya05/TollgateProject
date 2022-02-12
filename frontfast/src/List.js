import React, { useEffect, useState } from "react";//useState>>lets you add react state to functional components
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Read from "./Read";
import EditIcon from '@mui/icons-material/Edit';
import Edit from "./Update";
import Button from '@mui/material/Button';
import { oneAtTime,traverse} from "./API";

//getting list which is inserted in the mysql database 
const List=()=>{
    const [rview,setRview]=useState(false)//used for read
    const [eview,setEview]=useState(false)//used for edit
    const [company,setCompany]=useState("")//declared a new state variable called company

    const [all,setAll]=useState([])

    //allows us to perform side effects in the function components
    useEffect(()=>{
        iterate()
    },[])

    const iterate=async()=>{
        const t=await traverse()
        setAll(t.data)
    }

    const [obj,setObj]=useState(
        {
            "vehicleNumber":"",
            "ownerName":"",
            "vendor":"",
            "id":0,
            "balance":0.0,
            "transactions":""
        }
    )

   const reading=async(one)=>{
        const hey=await oneAtTime(one)
        setObj(hey.data)
    } 
    
   

    return(
        <>
           {(rview)?
            <>
                <Read tollgate={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
           </>
            :
           
            (eview)?
            <>
                <Edit id={company}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setEview(false)}>
                    Back
                </button>
            </>
            
            :
            <>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                        <table className="table table-stripped table-hover shodow text-light bg-info">
                            <thead>
                                <tr>
                                    <th>Number of the Vehicle</th>
                                    <th>Owner Name</th>
                                    <th>Vendor</th>
                                    <th>FastTag Id</th>
                                    <th>Balance</th>
                                    <th>Recently Passed Transactions</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all.map((data,index)=>(
                                    <tr>
                                        <td onClick={
                                            ()=>{
                                                setRview(true)
                                                reading(data.vehicleNumber)
                                         }}>
                                            {data.vehicleNumber}
                                        </td>
                                        <td>{data.ownerName}</td> 
                                    
                                        <td>{data.vendor}</td>
                                        <td>{data.id}</td>
                                        <td>{data.balance}</td> 
                                        <td>
                                            {data.transactions.map((ele)=>(
                                                <p>{ele}</p>
                                            ))}
                                        </td>
                                       <td>
                                            {/*<Button color="error" className="btn btn-outline-danger" onClick={
                                                ()=>{
                                                    abort(data.vehicleNumber)
                                                }
                                            }>
                                                <RemoveCircleIcon/>
                                        </Button>*/}
                                            <td>
                                        <Button color="warning" className="btn btn-outline-warning" onClick={
                                            ()=>{
                                                setEview(true)
                                                setCompany(data.vehicleNumber)
                                            }
                                        }>
                                            <EditIcon/>
                                        </Button>
                                    </td>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
           }
        </>
    );
}
                                    
                                   
                               

export default List;