export declare class DingTalk {
    url: string;
    constructor(token: string);
    private _sendData;
    /**
     * text 类型消息
     * @param params { title: string, mdText: string, text: string }
         * @returns Promise
         */
     text(params: IText): Promise<unknown>;
     /**
      * link 消息类型
      * @param param { title: string, text: string, msgUrl: string, picUrl: string }
          * @return Promise
          */
      link(params: ILinkMsg): Promise<unknown>;
      /**
       * markdown 消息类型
       * @param param { title: string, mdText: string, msgUrl: string, picUrl: string }
           * @return Promise
           */
       markDown(params: IMarkDown): Promise<unknown>;
       /**
        * feedCard 消息类型
        * @param param { links: { title: string, msgUrl: string, picUrl: string }]
            * @return Promise
            */
        feedCard(params: IFeedCard): Promise<unknown>;
        /**
         * aloneAction 消息类型
         * @param param { links: { title: string, mdText: string, btns: { title: string, url: string}, sort: 'vertical' | 'horizontal', hideAvatar: boolean }]
             * @return Promise
             */
         aloneAction(params: IAloneAction): Promise<unknown>;
         /**
          * aloneAction 消息类型
          * @param param { links: { title: string, mdText: string, singleTitle: string, singleUrl: string, hideAvatar: boolean }]
              * @return Promise
              */
          wholeAction(params: IWholeAction): Promise<unknown>;
         }

         declare interface IAloneAction {
             title: string;
             mdText: string;
             btns: IBtnItem[];
             sort?: ISort;
             hideAvatar?: boolean;
         }

         declare interface IAt {
             atAll?: boolean;
             atMobiles?: string[];
         }

         declare interface IBtnItem {
             title: string;
             url: string;
         }

         declare interface IFeedCard {
             links: ILinkItem[];
         }

         declare interface ILinkItem {
             title: string;
             msgUrl: string;
             picUrl?: string;
         }

         declare interface ILinkMsg extends ILinkItem {
             text: string;
         }

         declare interface IMarkDown extends IAt {
             title: string;
             mdText: string;
         }

         /**
          * ISort
          * @public
          */
         declare type ISort = 'vertical' | 'horizontal';

         /**
          * IText
          * @public
          */
         declare interface IText extends IAt {
             text: string;
         }

         declare interface IWholeAction {
             title: string;
             mdText: string;
             singleTitle: string;
             singleUrl: string;
             sort?: ISort;
             hideAvatar?: boolean;
         }

         export { }
