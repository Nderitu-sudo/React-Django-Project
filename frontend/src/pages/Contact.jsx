import './Contact.css';

function Contact(){


    return(

        <div>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt esse excepturi, sapiente, distinctio eos labore aperiam beatae quidem animi quibusdam illum doloribus doloremque explicabo architecto officiis perferendis fugiat, facere repellendus.
            Cumque praesentium fugiat accusamus nostrum, perferendis impedit magnam deserunt reiciendis facilis libero dignissimos esse minus, non alias iure explicabo repudiandae totam autem, omnis exercitationem modi magni illo iusto. Vero, delectus!
            Necessitatibus labore quidem delectus praesentium unde aliquam vitae, vero provident iure, ipsum dignissimos eos tempore possimus similique ipsam quis omnis sint rem ab? Beatae rerum dolorem exercitationem a veniam dolor!</p>

            <table className='table table-bordered'>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Accomodation</th>
                <th>Payment</th>
                </tr>

                <tr>
                    <td>Samuel Tod</td>
                    <td>todsamuel@gmailcom</td>
                    <td>0798456376</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Anita Shipman</td>
                    <td>anita@gmailcom</td>
                    <td>0722456376</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Jane Doe</td>
                    <td>janedoe@gmailcom</td>
                    <td>0756456372</td>
                    <td>No</td>
                    <td>Pending</td>
                </tr>

                <tr>
                    <td>Naomi Williams</td>
                    <td>naomi@gmailcom</td>
                    <td>0767456376</td>
                    <td>Yes</td>
                    <td>Paid</td>
                </tr>
            </table>


        </div>
    );
}

export default Contact;