import { Category, FormInputs } from "../lib/types";
import CategoryButton from "./CategoryButton";
import { useForm, SubmitHandler } from "react-hook-form";


const PublicationSearchForm = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-2 space-y-2"
    >
      <input 
        {...register('searchText')}
        type="text"
        defaultValue={''}
        placeholder="Search for anything"
        className='form-input'
      />

      <input 
        {...register('inventionSubjectMatterCategory')}
        type="text"
        defaultValue={'utility'}
        placeholder="Category"
        className='form-input'
      />

      <input 
        {...register('publicationFromDate')}
        type="text"
        defaultValue={''}
        placeholder="Earliest publication (YYYY-MM-DD)"
        className='form-input'
      />

      <input 
        {...register('publicationToDate')}
        type="text"
        defaultValue={''}
        placeholder="Latest publication (YYYY-MM-DD)"
        className='form-input'
      />

      <input 
        {...register('patentApplicationNumber')}
        type="text"
        defaultValue={''}
        placeholder="Application number"
        className='form-input'
      />

      <input 
        {...register('filingDateFromDate')}
        type="text"
        defaultValue={''}
        placeholder="Earliest filing date (YYYY-MM-DD)"
        className='form-input'
      />

      <input 
        {...register('filingDateToDate')}
        type="text"
        defaultValue={''}
        placeholder="Latest filing date (YYYY-MM-DD)"
        className='form-input'
      />

      <input 
        {...register('inventionTitle')}
        type="text"
        defaultValue={''}
        placeholder="Invention name"
        className='form-input'
      />

      <input 
        {...register('assigneeEntityName')}
        type="text"
        defaultValue={''}
        placeholder="Entity name"
        className='form-input'
      />

      <input 
        {...register('inventorNameText')}
        type="text"
        defaultValue={''}
        placeholder="Inventor name"
        className='form-input'
      />

      <input 
        {...register('claimText')}
        type="text"
        defaultValue={''}
        placeholder="Claim"
        className='form-input'
      />

      <input 
        {...register('abstractText')}
        type="text"
        defaultValue={''}
        placeholder="Abstract"
        className='form-input'
      />

      <input 
        {...register('descriptionText')}
        type="text"
        defaultValue={''}
        placeholder="Description"
        className='form-input'
      />

      <input 
        {...register('start')}
        type="number"
        defaultValue={0}
        placeholder="Patent number to start search from"
        className='form-input'
      />

      <input 
        {...register('rows')}
        type="number"
        defaultValue={10}
        placeholder="Results to return"
        className='form-input'
      />

      <input 
        type="submit"
        className="w-full bg-sky-500 rounded" 
      />
    </form>
  )
}

export default PublicationSearchForm;