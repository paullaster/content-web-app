import mongoose from 'mongoose';

import Attribute from './product.attribute';

const AttributeModel = mongoose.model ('Product attribute', Attribute);

export default AttributeModel