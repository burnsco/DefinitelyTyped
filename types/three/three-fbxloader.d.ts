// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/FBXLoader.js

import { LoadingManager } from "./three-core";
import {Group} from "./three-core";

interface ILoadedModel extends Group {
	animations?: AnimationClip[];
}
export class FBXLoader {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;

    load(url: string, onLoad: (group: ILoadedModel) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(FBXText: string, resourceDirectory: string) : Group;

}
