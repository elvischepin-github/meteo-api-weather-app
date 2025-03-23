import { Form, Button } from "react-bootstrap";

export default function Search({ allCities, submitCity }) {
  return (
    <Form action={submitCity}>
      <Form.Control
        autoFocus
        className="mb-3 px-4 custom-input"
        list="cities"
        type="text"
        name="city"
        placeholder="Which city?"
      />
      <datalist id="cities">
        {allCities.map((item) => {
          return <option key={item.code} value={item.name} />;
        })}
      </datalist>

      <Button variant="secondary" className="custom-input-btn" type="submit">
        &#8617;
      </Button>
    </Form>
  );
}
