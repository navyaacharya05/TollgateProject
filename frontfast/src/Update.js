import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CancelIcon from '@mui/icons-material/Cancel';
import  {oneAtTime,change } from "./API";


const Update=(kavya)=>{
    const [data,setDate]=useState(
        {
            "vehicleNumber":"",
            "ownerName":"",
            "vendor":"",
            "id":0,
            "balance":0.0,
            "transactions":[]
        }
    )

    useEffect(()=>{
        finding()
    },[])

    const finding=async()=>{
        const obj=await oneAtTime(kavya.id)
        const tmp=obj.data
        tmp.transactions=String(tmp.transactions)
        setDate(tmp)
    }

    const perform=(eve)=>{
        // extraction
        const{name,value}=eve.target;
        setDate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const modify=async()=>{
        data.transactions=data.transactions.split(',')
        const tmp=await change(data)
        alert(tmp.data)
        window.location.assign("http://localhost:3000")
    }

    return(
        <>
            <div className="mt-4 container">
                <h1 className="display-2 text-center text-info">Update  FastTag  Details</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                    <TextField
                        required
                        id="outlined-required"
                        label="Vehicle Number"
                        onChange={perform}
                        name="vehicleNumber"
                        value={data.vehicleNumber}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Owner Name"
                        onChange={perform}
                        name="ownerName"
                        value={data.ownerName}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Vendor"
                        onChange={perform}
                        name="vendor"
                        value={data.vendor}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="FastTag Id"
                        onChange={perform}
                        name="id"
                        value={data.id}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Balance"
                        onChange={perform}
                        name="balance"
                        value={data.balance}
                        className="form-control mb-3"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Recently Passed Transactions"
                        onChange={perform}
                        name="transactions"
                        value={data.transactions}
                        className="form-control mb-3"
                        />
                        <div className="row justify-content-around">
                            <Button variant="outlined" color="primary" className="col-4" 
                                onClick={()=>{
                                //alert(JSON.stringify(data)+" "+pos)
                                modify()
                                }}>
                                <UpgradeIcon/>
                            </Button>
                            <Button variant="outlined" color="error" className="col-4">
                                <CancelIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;