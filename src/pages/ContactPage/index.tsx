
import { Typography } from '../../components/typography/typography';
import { TextField } from './../../components/textfield/textfield';
import { Button } from './../../components/button/button';
import { Body, Head, Table, TableHead, TableRow } from '../../components/table/table';


export default function ContactPage() {
    return(
        <>
            <Typography variant= 'h1'>Name</Typography>
            <Typography variant= 'h2'>Email</Typography>
            <Typography variant= 'h3'>Contact</Typography>
            <Typography variant= 'subtitle1'>Steven Ponti</Typography>
            <Typography variant= 'hyperlink' href='http://google.com/'>www.google.com</Typography>

            <TextField placeHolder="text input"></TextField>

            <Button>Submit!</Button>

            <Table>
                <Head>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </Head>
                <Body>
                    <TableRow>
                        <TableHead>data 1</TableHead>
                        <TableHead>data 2</TableHead>
                        <TableHead>data 3</TableHead>
                        <TableHead>data 4</TableHead>
                        <TableHead>
                            <Button>view</Button>
                            <Button>update</Button>
                            <Button>delete</Button>
                        </TableHead>
                    </TableRow>
                    <TableRow>
                        <TableHead>data 1</TableHead>
                        <TableHead>data 2</TableHead>
                        <TableHead>data 3</TableHead>
                        <TableHead>data 4</TableHead>
                        <TableHead>
                            <Button>view</Button>
                            <Button>update</Button>
                            <Button>delete</Button>
                        </TableHead>
                    </TableRow>
                </Body>
            </Table>
        </>
    )
}