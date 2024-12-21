import { 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  Divider
} from "@mui/material";


export default function FiananceCalculators(){
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" className="text-center">Fianance Calculators</Typography>
        <Divider />
        <List>
          <ListItem className="list-item">
            <ListItemText primary="item1" />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="item1" />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="item1" />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="item1" />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="item1" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}