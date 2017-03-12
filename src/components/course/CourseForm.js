import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="title"
                 label="Title"
                 value={course.title}
                 onChange={onChange}
                 errors={errors.title}/>
      <SelectInput name="authorId"
                   label="Author"
                   value={course.authorId}
                   defaultOption="Select Author"
                   options={allAuthors}
                   onChange={onChange}
                   errors={errors.title}/>
      <TextInput name="category"
                 label="Category"
                 value={course.category}
                 onChange={onChange}
                 rrors={errors.category}/>
      <TextInput name="length"
                 label="Length"
                 value={course.length}
                 onChange={onChange}
                 errors={errors.length}/>
      <input type="submit"
             disabled={loading}
             value={loading ? 'Saving...' : 'Save'}
             className="btn btn-primary"
             onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.string,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
