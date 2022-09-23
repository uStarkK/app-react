import { Link } from "react-router-dom"

const Account = () => {
    return (
        <div>
            <div class="container_cuenta">
            <form class="cuenta">
                <fieldset> 
                <label for="GET-name">Usuario</label>
                <input id="GET-name" type="text" name="Usuario" placeholder="Ingrese usuario"/>
                <label for="GET-password">Contraseña</label>
                <input id="GET-password" type="password" name="Contraseña" placeholder="Ingrese contraseña"></input>
                </fieldset>

                <input type="submit" value="Iniciar sesión" id="create-acc"/>
                <Link to="#creacion_cuenta">No se encuentra registrado? Cree una cuenta gratuita!</Link>
            </form>
        </div>
        <div class="container_cuenta">
            <form class="crear_cuenta" id="creacion_cuenta">
                <fieldset>
                    <div>
                        <label for="create-user">Usuario</label>
                        <input id="create-user" type="text" name="Usuario" placeholder="Ingrese usuario"/>
                        <label for="create-password">Contraseña</label>
                        <input id="create-password" type="password" name="Contraseña" placeholder="Ingrese contraseña"/>
                        <input id="create-password" type="password" name="Contraseña" placeholder="Confirme contraseña"/>
                        <label for="GET-email">Email</label>
                        <input id="GET-email" type="text" name="email" placeholder="Ingrese su email"/>
                    </div>
                    <div class="licencia">
                        <p> Lea el acuerdo de licencia aqui: <Link to="#" target="_blank">EULA</Link></p>
                        <p> Acepta terminos y condiciones? <input type="checkbox" name="terminos_y_condiciones" id="check"/></p>
                    </div>
                    <input type="submit" value="Crear cuenta" id="create-acc"/>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default Account