import { 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  Divider
} from "@mui/material";
import { useRouter } from "next/router";


export default function MathCalculators(){

  const router = useRouter();

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="text-center">Math Calculators</Typography>
        <Divider />
        <List>
          <ListItem className="list-item">
            <ListItemText 
              primary="Percentage Calculators" 
              onClick={() => router.push("/calculators/Math/percentage/Percentage")}
            />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText 
              primary="Unit Converters" 
              onClick={() => router.push("/calculators/Math/Unit/Unit")}
            />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText 
              primary="Fraction Calculators"
              onClick={() => router.push("/calculators/Math/Fraction/Fraction")}
            />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText 
              primary="Geometry Calculators"
              onClick={() => router.push("/calculators/Math/Geomatry/Geomatry")}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}