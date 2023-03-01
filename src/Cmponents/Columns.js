export const COLUMNS = [

    {
        Header: "Product no",
        accessor:"product_number"
    },
    {
        Header: "Product id",
        accessor:"product_id"
    },
    {
        Header: "Product type",
        accessor:"product_type"
    }, 
    {
        Header: "ETA",
        accessor:"eta"
    }, 
    {
        Header: "Poc",
        accessor:"poc"
    }, 
    {
        Header: "status",
        accessor:"status"
    }
] 


export const GROUPED_COLUMNS =[
    
        {
            Header: "All Product Information",
            // accessor:"product_number"
            columns:[
                {
                    Header: "Product no",
                    accessor:"product_number"
                },
                {
                    Header: "Product id",
                    accessor:"product_id"
                },
                {
                    Header: "Product type",
                    accessor:"product_type"
                }, 

            ]
        },
        {
            Header:"About Product Completion",
            columns:[
                {
                    Header: "ETA",
                    accessor:"eta"
                }, 
                {
                    Header: "Poc",
                    accessor:"poc"
                }, 
                {
                    Header: "status",
                    accessor:"status"
                }

              
            ]
        }

    
]