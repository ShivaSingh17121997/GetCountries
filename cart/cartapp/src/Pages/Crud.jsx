import React, { useEffect, useState } from 'react'


export default function Crud() {
    const [products, setProducts] = useState([]);
    const [filteredData, setfilteredData] = useState([])
    const [search, setSearch] = useState("")
    const [categoryFilter, setCategoryFilter] = useState('')

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setfilteredData(data)

                setProducts(data)
            })

    }, [])

    const handleAsc = () => {
        const ascData = [...filteredData].sort((a, b) => {
            return a.price - b.price
        })
        setProducts(ascData)
    }

    const handleDesc = () => {
        console.log(filteredData, "filtereddAta")
        const descData = [...filteredData].sort((a, b) => {
            return b.price - a.price
        })
        setProducts(descData)
    }
    // search term
    const handleSerach = (e) => {
        const searchTerm = e.target.value.toLowerCase()
        setSearch(searchTerm)

        const search = filteredData.filter((item) => item.title.toLowerCase().includes(searchTerm))
        setProducts(search)
    }

    //delete

    const handleDelete = (id) => {
        //confermation 
        const confirmDelete = window.confirm("Are you want to delete the item?")
        if (!confirmDelete) {
            return;
        }

        const deleteItem = filteredData.filter((item) => item.id !== id);
        setProducts(deleteItem)
        alert("item deleted")
    }

    // filter by category

    const handleCategoryFilter = (e) => {
        const category = e.target.value.toLowerCase();
        setCategoryFilter(category);
        const filterByCategory = filteredData.filter((item) => item.category.toLowerCase() === category);

        setProducts(filterByCategory)

    }


    return (
        <div>
            <div>
                <input value={search} onChange={handleSerach} type="text" placeholder='search...' />
            </div>
            <div>
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>

            <div>
                <label>jewelery</label>
                <input
                    id='mens'
                    name='category'
                    value="jewelery"
                    checked={categoryFilter === "jewelery"}
                    onChange={handleCategoryFilter}
                    type="radio"
                /><br />

                <label>electronics</label>

                <input
                    type="radio"
                    id='electronics'
                    name='category'
                    value='electronics'
                    checked={categoryFilter === 'electronics'}
                    onChange={handleCategoryFilter}


                />

            </div>

            <div>
                {products?.map((item) => {
                    return <div><img width="100px" height="100px" src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <button onClick={() => handleDelete(item.id)} >delete</button>
                    </div>
                })}
            </div>

        </div>
    )
}
