// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDhcpSearchResultStaticIP {
    ip?: string;
    static?: string;
}

export default class DhcpSearchResultStaticIP {
    readonly _ip: string | undefined;

    /** */
    get ip(): string | undefined {
        return this._ip;
    }

    readonly _static: string | undefined;

    /**
     * Description: The result of determining static IP address.
     *
     * Example: yes
     */
    get static(): string | undefined {
        return this._static;
    }

    constructor(props: IDhcpSearchResultStaticIP) {
        if (typeof props.ip === 'string') {
            this._ip = props.ip.trim();
        }
        if (typeof props.static === 'string') {
            this._static = props.static.trim();
        }
    }

    serialize(): IDhcpSearchResultStaticIP {
        const data: IDhcpSearchResultStaticIP = {
        };
        if (typeof this._ip !== 'undefined') {
            data.ip = this._ip;
        }
        if (typeof this._static !== 'undefined') {
            data.static = this._static;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            static: !this._static ? true : typeof this._static === 'string' && !this._static ? true : this._static,
            ip: !this._ip ? true : typeof this._ip === 'string' && !this._ip ? true : this._ip,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IDhcpSearchResultStaticIP>): DhcpSearchResultStaticIP {
        return new DhcpSearchResultStaticIP({ ...this.serialize(), ...props });
    }
}
