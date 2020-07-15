import React, { PureComponent } from "react";
import "./App.css";
import {
  Card,
  Container,
  CardHeader,
  Grid,
  Paper,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

import { connect } from "react-redux";
import { getProducts } from "./actions/actions";

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  FormRow = (product) => (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className="paper">{product.title}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="paper">{product.description}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="paper">{product.price}</Paper>
      </Grid>
    </React.Fragment>
  )

  render() {
    const { products } = { ...this.props };
    return (
      <Container>
        <h3>Product List</h3>
        {console.log("products", products)}
        {products.length > 0 ?
          (<Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Paper className="paper header">Title</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper header">Description</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className="paper header">Price</Paper>
              </Grid>
            </Grid>
          </Grid>)
          : "No records to display"}
        {products.map((product, i) => {
          return (
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                {this.FormRow(product)}
              </Grid>
            </Grid>
          )
        })
        }

        {this.props.message && (
          <Card data-testid="message">
            <CardHeader title={this.props.message} />
          </Card>
        )}
        {this.props.error && (
          <div data-testid="error-msg">
            <ToastContainer />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  message: state.message,
  error: state.error,
  products: state.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

App.defaultProps = {
  loading: false,
  message: "",
  error: null,
  products: []
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
