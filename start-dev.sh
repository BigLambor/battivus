#!/bin/bash

# start-dev.sh - Advanced Control Script for Battivus Project

# --- Styling ---
BOLD='\033[1m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# --- Configuration ---
CMS_PORT=1337
FRONTEND_PORT=3000
CMS_DIR="cms"
FRONTEND_DIR="frontend"

print_header() {
    clear
    echo -e "${CYAN}${BOLD}"
    echo "  ____        _   _   _                 "
    echo " |  _ \      | | | | (_)                "
    echo " | |_) | __ _| |_| |_ ___   ___   _ ___ "
    echo " |  _ < / _\` | __| __| \ \ / / | | / __|"
    echo " | |_) | (_| | |_| |_| |\ V /| |_| \__ \\"
    echo " |____/ \__,_|\__|\__|_| \_/  \__,_|___/"
    echo -e "${NC}"
    echo -e "${BLUE}  Battivus Development Control Center${NC}"
    echo "----------------------------------------"
}

usage() {
    echo -e "${BOLD}Usage:${NC} $0 [command] [target]"
    echo ""
    echo -e "${BOLD}Commands:${NC}"
    echo -e "  ${GREEN}start${NC}    Start services (default)"
    echo -e "  ${RED}stop${NC}     Stop running services"
    echo -e "  ${YELLOW}restart${NC}  Stop then start services"
    echo -e "  ${CYAN}status${NC}   Check service status"
    echo -e "  ${BLUE}help${NC}     Show this help message"
    echo ""
    echo -e "${BOLD}Targets:${NC}"
    echo -e "  ${BOLD}all${NC}      Both CMS and Frontend (default)"
    echo -e "  ${BOLD}cms${NC}      Strapi CMS only"
    echo -e "  ${BOLD}frontend${NC} Next.js Frontend only (alias: fe)"
    echo ""
}

check_port() {
    lsof -i:$1 -t >/dev/null 2>&1
    if [ $? -eq 0 ]; then
        return 0 # Running
    else
        return 1 # Not running
    fi
}

kill_port() {
    local PORT=$1
    local NAME=$2
    if check_port $PORT; then
        echo -e "${YELLOW}Stopping $NAME on port $PORT...${NC}"
        lsof -ti:$PORT | xargs kill -9 2>/dev/null
        echo -e "${RED}Stopped $NAME.${NC}"
    else
        echo -e "${CYAN}$NAME is not running.${NC}"
    fi
}

start_cms() {
    if check_port $CMS_PORT; then
        echo -e "${YELLOW}CMS is already running on port $CMS_PORT.${NC}"
    else
        echo -e "${GREEN}🐳 Starting Strapi CMS (Docker)...${NC}"
        cd $CMS_DIR
        docker compose up -d
        cd ..
    fi
}

stop_cms() {
    echo -e "${YELLOW}Stopping Strapi CMS (Docker)...${NC}"
    cd $CMS_DIR
    docker compose down
    cd ..
    echo -e "${RED}Stopped Strapi CMS.${NC}"
}

start_frontend() {
    if check_port $FRONTEND_PORT; then
        echo -e "${YELLOW}Frontend is already running on port $FRONTEND_PORT.${NC}"
    else
        echo -e "${GREEN}🖥️  Starting Frontend...${NC}"
        cd $FRONTEND_DIR
        npm run dev &
        cd ..
    fi
}

do_status() {
    echo ""
    echo -e "${BOLD}Service Status:${NC}"
    
    if check_port $CMS_PORT; then
        echo -e "  CMS (:$CMS_PORT):      ${GREEN}● ONLINE${NC}"
    else
        echo -e "  CMS (:$CMS_PORT):      ${RED}○ OFFLINE${NC}"
    fi

    if check_port $FRONTEND_PORT; then
        echo -e "  Frontend (:$FRONTEND_PORT): ${GREEN}● ONLINE${NC}"
    else
        echo -e "  Frontend (:$FRONTEND_PORT): ${RED}○ OFFLINE${NC}"
    fi
    echo ""
}

# --- Main Logic ---

COMMAND=${1:-start}
TARGET=${2:-all}

case "$COMMAND" in
    start)
        print_header
        case "$TARGET" in
            all)
                start_cms
                start_frontend
                ;;
            cms)
                start_cms
                ;;
            frontend|fe)
                start_frontend
                ;;
            *)
                echo -e "${RED}Unknown target: $TARGET${NC}"
                exit 1
                ;;
        esac
        
        # Keep script running if we started something in background so we can see logs
        # With Docker in background (-d), we don't need to keep script alive for it, 
        # but npm run dev is BG.
        
        echo -e "\n${BOLD}Services initiated.${NC}"
        echo -e "Run '${BLUE}$0 status${NC}' to check status."
        echo -e "Run '${RED}$0 stop${NC}' to stop them."
        ;;
        
    stop)
        case "$TARGET" in
            all)
                stop_cms
                kill_port $FRONTEND_PORT "Frontend"
                ;;
            cms)
                stop_cms
                ;;
            frontend|fe)
                kill_port $FRONTEND_PORT "Frontend"
                ;;
            *)
                echo -e "${RED}Unknown target: $TARGET${NC}"
                exit 1
                ;;
        esac
        ;;
        
    restart)
        $0 stop $TARGET
        sleep 1
        $0 start $TARGET
        ;;
        
    status)
        print_header
        do_status
        ;;
        
    help|--help|-h)
        print_header
        usage
        ;;
        
    *)
        echo -e "${RED}Unknown command: $COMMAND${NC}"
        usage
        exit 1
        ;;
esac
