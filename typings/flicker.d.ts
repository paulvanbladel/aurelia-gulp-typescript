declare module FlickrResults {
    interface IFlickrImage {
        title: string;
        link: string;
        media: string;
        date_taken: Date;
        description: string;
        published: Date;
        author: string;
        tags: string;
    }

    interface IFlickrResult {
        title: string;
        link: string;
        description: string;
        modified: Date;
        generator: string;
        items: IFlickrImage[];
    }
}