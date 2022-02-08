import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Read from "./Read";
import EditIcon from '@mui/icons-material/Edit';
import Edit from "./Update";
import Button from '@mui/material/Button';
//import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { oneAtTime,traverse,terminate} from "./API";



const List=()=>{
    const [rview,setRview]=useState(false)
    const [eview,setEview]=useState(false)
    const [company,setCompany]=useState("")

    const [all,setAll]=useState([])

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
    
    {/*const abort=async(par)=>{
        const yet=await terminate(par)
        alert(yet.data)
        window.location.assign("http://localhost:3000")
    }*/}


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