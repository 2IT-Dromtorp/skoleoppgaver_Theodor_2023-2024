//ligger her fordi det kan hende jeg finner en annen måte jeg har lyst til å fikse størelse probleme med men som en backup om jeg ikke klarer det og deleter noe viktig

//for select .js
/*
import { useEffect, useState } from "react";
import axios from "axios";
import './table_style.css';

export default function Select() {
    const [elevData, setElevData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10); 
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getElevData(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const getElevData = (page, pageSize) => {
        axios
            .get(`http://localhost:3000/?page=${page}&pageSize=${pageSize}`)
            .then(response => {
                setElevData(response.data.data);
                setTotalPages(Math.ceil(response.data.total / pageSize));
            })
            .catch(error => console.log(error));
    };

   
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ElevID</th>
                        <th>Fornavn</th>
                        <th>Etternavn</th>
                        <th>DatamaskinID</th>
                        <th>Hobby</th>
                        <th>Klasse</th>
                        <th>Kjønn</th>
                    </tr>
                </thead>
                <tbody>
                    {elevData.map(elev => (
                        <tr key={elev.ElevID}>
                            <td>{elev.ElevID}</td>
                            <td>{elev.Fornavn}</td>
                            <td>{elev.Etternavn}</td>
                            <td>{elev.DatamaskinID}</td>
                            <td>{elev.Hobby}</td>
                            <td>{elev.Klasse}</td>
                            <td>{elev.Kjonn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                 Pagination Controls 
                {[...Array(totalPages).keys()].map((page) => (
                    <button key={page} onClick={() => handlePageChange(page + 1)}>
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}


// for update.js fordi den blir ødelgt uten å skifte for pagination fordi updte ikke forventer pagination som data

useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get("http://localhost:3000/", {
              params: {
                  page: 1, 
                  pageSize: 100 
              }
          });
          if (response.data && response.data.data) {
              setUsers(response.data.data);
              if (response.data.data.length > 0) {
                  setSelectedUserId(response.data.data[0].ElevID);
              }
          } else {
              setUsers([]);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();
}, []);
*/