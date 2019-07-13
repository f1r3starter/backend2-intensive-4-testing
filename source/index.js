import dg from 'debug';

// Instruments
import { app } from './server';
import { getPort} from './utils';

const debug = dg('server:main');
const PORT = getPort();

app.listen(PORT, () => {
    debug(`Server API is up on port ${PORT}`);
});
