import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Reduxfeature/store';

interface Resource {
  lastUpdatedDate: string;
  updateDate: string;
  deletedAt: string | null;
  companyId: string;
  resourceId: string;
  parentId: string;
  creationDate: string;
  resourceName: string;
  ownerId: string;
  resourceType: string;
  fileType?: any;
  data?: any;
}

interface ResourceState extends Array<Resource> {}

interface DeletedResourceState extends Array<Resource> {}

const initialState: ResourceState = [];
const initialDeletedState: DeletedResourceState = [];

const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    setResources: (state, action: PayloadAction<Resource[]>) => {
      return action.payload;
    },
  },
});

const deletedResourceSlice = createSlice({
  name: 'deletedResource',
  initialState: initialDeletedState,
  reducers: {
    setDeletedResources: (state, action: PayloadAction<Resource[]>) => {
      return action.payload;
    },
  },
});

export const { setResources } = resourceSlice.actions;
export const { setDeletedResources } = deletedResourceSlice.actions;
export const selectResources = (state: RootState) => state.resource;
export const selectDeletedResources = (state: RootState) => state.deletedResource;

export default resourceSlice.reducer;
export const deletedResourceReducer = deletedResourceSlice.reducer;
