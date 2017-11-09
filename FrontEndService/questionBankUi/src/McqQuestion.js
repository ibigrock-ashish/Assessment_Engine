import React from 'react';
import TextField from 'material-ui/TextField';
const styles = {
  customWidth: {
    width: 400,
  },
  padding:{
    paddingLeft:20,
  },

};
const McqQuestion = () => (
  <div>
  <br />
  <br />
  <TextField
        hintText="Type your Question here"
        fullWidth={true}

      /><br />
  <TextField

          floatingLabelText="option A"
          floatingLabelFixed={true}
          style={styles.padding}

  /><br /><br />
  <TextField

          floatingLabelText="option B"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /> <br />
  <TextField

          floatingLabelText="option C"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /><br />
  <TextField
          hintText=""
          floatingLabelText="option D"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /><br />
  <TextField
          hintText="A or B or C or D"
          floatingLabelText="Correct Option"
          floatingLabelFixed={true}
          style={styles.padding}
  /><br /><br />
  </div>
  );

export default McqQuestion;
