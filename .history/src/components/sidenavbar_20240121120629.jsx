function SideNavBar() { 
    return (
        <div className="sidenavbar" style={{backgroundColor:"blue"}} >
            
            <div className=" space-y-48 justify-between ">
                <div className="space-y-4">
                    <div id="head" style={{
                    alignContent:"center",
                }}>
                        ergre
                    </div>

                    <div id="items align-middle" style={{
                    alignItems:"center",
                }}>
                        <ul>
                            <li>
                                <button>Home</button>
                            </li>
                            <li>
                                <button>Orders</button>
                            </li>
                            <li>
                                <button>Products</button>
                           </li>
                            <li>
                                 <button>Delivery</button>
                            </li>
                            <li>
                                <button>Marketing</button>
                            </li>
                            <li>
                                <button>Analytics</button>
                            </li>
                            <li>
                                <button>Payouts</button>
                            </li>
                            <li>
                                <button>Discounts</button>
                            </li>
                            
                            <li>
                                <button>Audience</button>
                            </li>
                            <li>
                                <button>Appearance</button>
                            </li>
                            <li>
                                 <button>Plugin</button>                
                            </li>                           
                        </ul>
                    </div>
                </div>

                <div className="shadow-2xl" style={{
                    alignItems:"center",
                }}>
                    sgrr
                </div>  
            </div>
        
        </div>
    );
}

export default SideNavBar;