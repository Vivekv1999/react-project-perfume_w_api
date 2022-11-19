import React, { useEffect, useState } from 'react'

export default function Usertable() {
    const [userrr, setUser] = useState()
    const [filterdata, setFilterdata] = useState()
    const [searchdata, setSearchdata] = useState("")

    useEffect(() => {
        getuser()
    }, [])

    const getuser = () => {
        fetch('http://localhost:3008/user')
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                // console.log(userrr);
                console.log(data)
                console.log(userrr, "uuuu")
            })
    }

    const onchange = (e) => {
        setSearchdata(e.target.value.toLowerCase())
        filter()

    }

    const filter = () => {
        if (searchdata != " ") {
            const data = userrr.filter((item) => {
                return Object.values(item).join(" ").toLowerCase().includes(searchdata)
            })
            setFilterdata(data)
        }


    }


    return (
        <>
        
            <div className='col-md-9' style={{marginTop:"120px",marginLeft:"auto",marginRight:"auto"}}>
                <form className="my-5 ">
                    <input className="form-control me-2" type="search" placeholder="Search" onChange={onchange} aria-label="Search" />
                </form>

                <table className="table table-bordered">
                    <thead>
                        <tr >
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        searchdata.length > 1 ?
                            (filterdata && filterdata.map((item) =>
                                item.id === 1 ? 
                                    " "
                                    :
                                    <>
                                        <tr style={{color:"black"}}>
                                            <th scope="row" >{item.id}</th>
                                            <td>{item.uname}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    </>
                            ))
                    
                        :
                    ( userrr && userrr.map((item) =>
                        item.id === 1 ? " "
                        :
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.uname}</td>
                            <td>{item.email}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>


        </>
    )
}
