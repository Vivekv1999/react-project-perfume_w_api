import React, { useEffect, useState } from 'react'

export default function Usertable() {
    const [userrr, setUser] = useState(null)

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

    return (
        <>
            <div className="container2 col-md-10">
                <form className="my-5">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <div className="container22">

                <table className="table table-bordered">
                    <thead>
                        <tr >
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userrr && userrr.map((item) =>
                            item.id == 1 ? " "
                            :
                            
                            <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.uname}</td>
                                    <td>{item.email}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
                    </div>


        </>
    )
}
