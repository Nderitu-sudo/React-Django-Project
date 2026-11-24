function About(){

    const headingStyles = {
        color:"red",
        fontWeight:"bold",
        fontSize:"30px"

    }

    const paragrapghStyles={
        fontStyle:"italic"
    }

    const imageStyles ={
        width:"400px",
        height:"200px",
        borderRaduis:"10px"
    }

    return(

        <div>
            <h1 style={headingStyles}>About ShopHive!</h1>
            <p style={paragrapghStyles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolore, fugit aut asperiores a soluta beatae laboriosam autem quas ipsum vel nulla ipsam eaque reprehenderit sed rem facilis commodi sunt.
            Ab ullam aspernatur enim est tempora deleniti aperiam temporibus explicabo! Illo libero corrupti corporis nisi! Enim ipsa sapiente veritatis sunt officia aperiam, fugiat beatae doloribus ipsam cupiditate laudantium necessitatibus quae.</p>
            <img src="images/perfume5.png" alt="" />

        </div>
    );
}

export default About;