import Menu from "./Menu";

function BaseLayout (props) {

    return (
        <>
            <Menu/>
            <div>
                {props.children}
            </div>


        </>
    )
}

export default BaseLayout;