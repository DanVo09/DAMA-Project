import React from 'react';
import axios from 'axios';

class Courses extends React.Component {
  // State of your application
  state = {
    courses: [],
    error: null,
  };

  // Fetch your courses immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/courses');
      this.setState({ courses: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, course } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="Courses">
        <ul>
          {this.state.courses.map(course => (
            <li key={course.id}>{course.attributes.name}: {course.attributes.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Courses;
