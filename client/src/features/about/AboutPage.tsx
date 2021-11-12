import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => console.log(error))
          }
        >
          test 400 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => console.log(error))
          }
        >
          test 401 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => console.log(error))
          }
        >
          test 404 Error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => console.log(error))
          }
        >
          test 500 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.getValidationError().catch((error) =>
              console.log(error)
            )
          }
        >
          validation error
        </Button>
      </ButtonGroup>
    </Container>
  );
}
