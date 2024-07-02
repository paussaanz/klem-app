import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import Input from '../components/Forms/Input';
import { postCreatePost } from '../services/PostService';

const CreatePostPage = () => {
  const initialValues = {
    coverImage: '',
    ownerCompany: '',
    privacy: false,
    title: '',
    description: '',
    trainingOutline: '',
    trainingPDF: '',
    insideImage: '',
    videoLink: '',
    questions: [{ text: '', answers: [{ text: '', isCorrect: false }] }]
  };

  const validationSchema = Yup.object({
    coverImage: Yup.string().required('Required'),
    ownerCompany: Yup.string().required('Required'),
    privacy: Yup.boolean().required('Required'),
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    trainingOutline: Yup.string().required('Required'),
    trainingPDF: Yup.string().required('Required'),
    insideImage: Yup.string().required('Required'),
    videoLink: Yup.string().required('Required'),
    questions: Yup.array()
      .of(
        Yup.object({
          text: Yup.string().required('Required'),
          answers: Yup.array()
            .of(
              Yup.object({
                text: Yup.string().required('Required'),
                isCorrect: Yup.boolean().required('Required')
              })
            )
            .min(1, 'At least one answer is required')
        })
      )
      .min(1, 'At least one question is required')
      .max(5, 'No more than 5 questions allowed')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await postCreatePost(values);
      resetForm();
      alert('Post created successfully');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Input label="Cover Image" name="coverImage" type="text" />
          <Input label="Owner Company" name="ownerCompany" type="text" />
          <Input label="Privacy" name="privacy" type="checkbox" />
          <Input label="Title" name="title" type="text" />
          <Input label="Description" name="description" type="text" />
          <Input label="Training Outline" name="trainingOutline" type="text" />
          <Input label="Training PDF" name="trainingPDF" type="text" />
          <Input label="Inside Image" name="insideImage" type="text" />
          <Input label="Video Link" name="videoLink" type="text" />

          <FieldArray name="questions">
            {({ push, remove }) => (
              <div>
                {values.questions.map((question, qIndex) => (
                  <div key={qIndex}>
                    <Input label={`Question ${qIndex + 1}`} name={`questions[${qIndex}].text`} type="text" />
                    <FieldArray name={`questions[${qIndex}].answers`}>
                      {({ push: pushAnswer, remove: removeAnswer }) => (
                        <div>
                          {question.answers.map((answer, aIndex) => (
                            <div key={aIndex}>
                              <Input
                                label={`Answer ${aIndex + 1}`}
                                name={`questions[${qIndex}].answers[${aIndex}].text`}
                                type="text"
                              />
                              <Input
                                label={`Is Correct`}
                                name={`questions[${qIndex}].answers[${aIndex}].isCorrect`}
                                type="checkbox"
                              />
                              <button type="button" onClick={() => removeAnswer(aIndex)}>
                                Remove Answer
                              </button>
                            </div>
                          ))}
                          <button type="button" onClick={() => pushAnswer({ text: '', isCorrect: false })}>
                            Add Answer
                          </button>
                        </div>
                      )}
                    </FieldArray>
                    <button type="button" onClick={() => remove(qIndex)}>
                      Remove Question
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => push({ text: '', answers: [{ text: '', isCorrect: false }] })}>
                  Add Question
                </button>
              </div>
            )}
          </FieldArray>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostPage;
