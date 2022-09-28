import { FormInputs, PatentSearchResults } from "../lib/types";
import { FieldErrorsImpl, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type PublicationSearchFormProps = {
  setSearchResults: (r: PatentSearchResults) => void,
  setIsLoadingSearchResults: (isLoading: boolean) => void,
};

const PublicationSearchForm = ({ 
  setSearchResults, 
  setIsLoadingSearchResults 
}: PublicationSearchFormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    setIsLoadingSearchResults(true);
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      if (value !== '')
        query.append(key, String(value));
    }
    const request = await axios.get('/api/publications?' + query);
    const searchResults: PatentSearchResults = request.data;

    console.log(searchResults);

    setIsLoading(false);
    setIsLoadingSearchResults(false);
    setSearchResults(searchResults);
  }

  const handleError = (errors: FieldErrorsImpl<FormInputs>) => {
    console.error(errors);
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit, handleError)}
      className="flex flex-col space-y-2"
    >
      
      <textarea
        {...register('searchText')}
        defaultValue={''}
        placeholder="Search for anything"
        className='form-input'
        rows={3}
      ></textarea>

      <div className="flex justify-around">
        <label htmlFor="utility">
          <input 
            {...register('inventionSubjectMatterCategory')}
            name="inventionSubjectMatterCategory"
            type="radio" 
            value='utility'
            id="utility"
            defaultChecked
          />
          <span>Utility</span>
        </label>
        <label htmlFor="design">
          <input 
            {...register('inventionSubjectMatterCategory')}
            name="inventionSubjectMatterCategory"
            type="radio" 
            value='design'
            id="design"
          />
          <span>Design</span>
        </label>
        <label htmlFor="plant">
          <input 
            {...register('inventionSubjectMatterCategory')}
            name="inventionSubjectMatterCategory" 
            type="radio" 
            value='plant'
            id="plant"
          />
          <span>Plant</span>
        </label>
      </div>

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

      <label htmlFor="start" className="flex justify-between">
        <span>Beginning record number</span>
        <input 
          {...register('start')}
          type="number"
          defaultValue={0}
          className='form-input w-16'
          id="start"
        />
      </label>

      <label htmlFor="row" className="flex justify-between">
        <span>Max results returned</span>
        <input 
          {...register('rows')}
          type="number"
          defaultValue={8}
          // step={5}
          min={1}
          className='form-input w-16'
          id="row"
        />
      </label>

      <input 
        type="submit"
        className={`${isLoading ? 'bg-stone-400 animate-pulse' : 'bg-sky-700'} w-full rounded p-1 cursor-pointer`}
        disabled={isLoading}
      />
    </form>
  )
}

export default PublicationSearchForm;