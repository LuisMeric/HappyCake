import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
    return (
        <Form>

            <h3>Si quieres mayor información, contactanos </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa Correo" />
                <Form.Text className="text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Consulta</Form.Label>
                <Form.Control as="textarea" rows={6} />
                {/* <textarea class='form-control' rows="10"></textarea> */}
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
}

export default Contacto;