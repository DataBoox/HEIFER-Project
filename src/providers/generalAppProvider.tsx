import { createContext, useContext, useState } from "react";
import Loading from "react-fullscreen-loading";

type GeneralAppProviderProv = {
    setFullScreenLoading: (status: boolean) => void,
    setTransparentScreenLoading: (status:boolean) => void;
};

export const GeneralAppProviderContext = createContext<GeneralAppProviderProv>({
    setFullScreenLoading: () => {},
    setTransparentScreenLoading: () => {},
});

export const GeneralAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [fullScreenLoading, setFullScreenLoading] = useState(false);
    const [transparentScreenLoading, setTransparentScreenLoading] = useState(false);


    return (
        <GeneralAppProviderContext.Provider
            value={{
                setFullScreenLoading,
                setTransparentScreenLoading
            }}
        >
            <Loading loading={fullScreenLoading} background="#2ecc71" loaderColor="#fff" />
            <Loading loading={transparentScreenLoading} background="rgba(0, 0, 0, 0.4)" loaderColor="#fff" />
            {children}
        </GeneralAppProviderContext.Provider>
    )
}

export const useGeneralAppProviderContext = () => useContext(GeneralAppProviderContext);

