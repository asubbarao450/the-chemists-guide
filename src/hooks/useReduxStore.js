import { useSelector } from 'react-redux';

//These aren't used in the project, but are something you could use


//Custom Hook -- uses other hooks
const useReduxStore = () => {
  //accesses the useSelector hook and gives back entire store
  return useSelector((store) => store);
};



 const useUser = () => {
  return useSelector(store => store.user)
 }

 const useCompounds = () => {
  return useSelector(store => store.compounds)
 }


export default useReduxStore;
