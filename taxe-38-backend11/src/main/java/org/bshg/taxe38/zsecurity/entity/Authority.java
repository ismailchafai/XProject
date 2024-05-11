package org.bshg.taxe38.zsecurity.entity;

import org.springframework.security.core.GrantedAuthority;

public record Authority(String authority) implements GrantedAuthority {
    @Override
    public String getAuthority() {
        return this.authority();
    }
}
