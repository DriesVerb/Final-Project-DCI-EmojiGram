import React, { useState, Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";
import { makeStyles } from "@material-ui/core/styles";

//Material UI
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Link,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";

const userForm = (props) => {
  const profileContext = useContext(ProfileContext);
  const { current, clearAll, editProfile } = profileContext;

  useEffect(() => {
    console.log(current);
    if (current !== null) setUser(current);
  }, [profileContext, current]);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    hobby: "",
  });

  const { name, username, email, location, occupation, hobby } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editProfile(user);
    console.log(user);
    props.history.push("/profile");
  };

  const clear = () => {
    clearAll();
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 405,
    },
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <Card
        elevation={10}
        style={{
          maxWidth: 410,
          margin: "0 auto",
          padding: "20px 5px",
          marginTop: "50px",
        }}
      >
        <Typography gutterBottom variant="h4" align="center">
          <i className="fas fa-user mr-2 " />
          Add some changes to your profile
        </Typography>
        <Typography
          className="mt-4 text-info"
          gutterBottom
          variant="h2"
          align="center"
        >
          Update Profile
        </Typography>
        <CardContent>
          <Formik>
            <Form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  {/* Username Input */}
                  <Field
                    as={TextField}
                    name="username"
                    value={username}
                    label="Username"
                    placeholder="Enter new Username"
                    variant="outlined"
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>

                {/* Name Input */}
                <Grid xs={12} sm={6} item>
                  <Field
                    as={TextField}
                    name="name"
                    value={name}
                    className="field mb-5"
                    label="Name"
                    placeholder="Enter new Name"
                    variant="outlined"
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>

                {/* Email Input */}
                <Grid xs={12} item>
                  <Field
                    as={TextField}
                    name="email"
                    value={email}
                    className="field mb-5"
                    type="email"
                    label="Email"
                    placeholder="Enter new Email"
                    variant="outlined"
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Typography align="center">
                <a href="#!">Click to edit your Password</a>
              </Typography>

              {/* Occupation Input */}
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  name="occupation"
                  value={occupation}
                  className="field mb-5"
                  label="Occupation"
                  placeholder="Enter new Occupation"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                />
              </Grid>

              {/* Hobby Input */}
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  name="hobby"
                  value={hobby}
                  className="field mb-5"
                  label="hobby"
                  placeholder="Enter hobby"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                />
              </Grid>

              {/* Location Selection */}
              <Grid xs={12} item>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Location</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={location}
                    onChange={onChange}
                    label="Location"
                    name="location"
                  >
                    <FormHelperText>Enter new location</FormHelperText>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Belgium"}>Belgium</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"USA"}>USA</MenuItem>
                    <MenuItem value={"China"}>China</MenuItem>
                    <MenuItem value={"Australia"}>Australia</MenuItem>
                    <MenuItem value={"Denmark"}>Denmark</MenuItem>
                    <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item className="field mb-4">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "#219ebc" }}
                >
                  <span className="text-white">Update</span>
                </Button>
              </Grid>

              <Grid xs={12} item>
                {current && (
                  <div>
                    <Link
                      className="btn btn-light btn-block"
                      onClick={clear}
                      style={{ fontSize: "2rem" }}
                    >
                      Clear
                    </Link>
                  </div>
                )}
              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Fragment>
  );
};
export default userForm;
